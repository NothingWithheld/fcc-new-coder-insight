import * as d3 from "d3";
import React, { useRef, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function BarChart({ data }) {
  const chartRef = useRef();
  const axisRef = useRef();
  const tooltipRef = useRef();
  const tooltipHeadingRef = useRef();
  const tooltipEarningsRef = useRef();
  const tooltipCountRef = useRef();

  useEffect(() => {
    d3.select(chartRef.current)
      .attr("width", 650)
      .attr("height", 400)
      .style("border", "1px solid black")
      .style("border-radius", "8px");

    d3.select(tooltipRef.current).style("opacity", 0);
  }, []);

  useEffect(() => {
    const draw = () => {
      const svg = d3.select(chartRef.current);
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data.map(([avg]) => avg))])
        .range([395, 40]);

      d3.select(axisRef.current).call(d3.axisLeft().scale(yScale));

      const rectangles = svg.selectAll("rect").data(data);

      rectangles
        .transition()
        .duration(300)
        .attr("height", ([avg]) => 400 - yScale(avg))
        .attr("y", ([avg]) => yScale(avg));

      rectangles
        .enter()
        .append("rect")
        .on("mouseover", ([avg, num], i) => {
          d3.select(tooltipRef.current).style("opacity", 1);
          d3.select(tooltipHeadingRef.current).text(`Selection ${i + 1}`);
          d3.select(tooltipEarningsRef.current).text(
            `Average expected earnings: $${avg}`
          );
          d3.select(tooltipCountRef.current).text(
            `Number who fit criteria: ${num}`
          );
        })
        .on("mouseout", () => d3.select(tooltipRef.current).style("opacity", 0))
        .on("mousemove", () =>
          d3
            .select(tooltipRef.current)
            .style("left", `${d3.event.pageX + 10}px`)
            .style("top", `${d3.event.pageY + 10}px`)
        )
        .attr("fill", "#9c27b0")
        .attr("x", (_, i) => i * 45 + 55)
        .attr("y", () => 400)
        .attr("width", 40)
        .attr("height", 0)
        .transition()
        .duration(300)
        .attr("height", ([avg]) => 400 - yScale(avg))
        .attr("y", ([avg]) => yScale(avg));

      rectangles
        .exit()
        .transition()
        .duration(300)
        .attr("y", () => 400)
        .attr("height", 0)
        .remove();
    };

    draw();
  }, [data]);

  return (
    <Box>
      <Box
        ref={tooltipRef}
        position="absolute"
        bgcolor="white"
        padding="4px"
        border="1px solid black"
        borderRadius="4px"
      >
        <Typography ref={tooltipHeadingRef} />
        <Typography ref={tooltipEarningsRef} />
        <Typography ref={tooltipCountRef} />
      </Box>
      <svg ref={chartRef}>
        <g ref={axisRef} transform="translate(50, 0)" />
      </svg>
    </Box>
  );
}

export default BarChart;
