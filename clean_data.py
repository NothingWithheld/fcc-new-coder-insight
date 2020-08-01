import pandas as pd
import math

new_coder_df = pd.read_csv('2017-fCC-New-Coders-Survey-Data.csv')

for r in new_coder_df:
    print(r)

print(new_coder_df['ExpectedEarning'])
print(new_coder_df['Income'])
print(sum(map(lambda n: not math.isnan(n), new_coder_df['Income'])))

incomes = set()
for n in new_coder_df['Income']:
    if not math.isnan(n):
        incomes.add(n)

earnings = set()
for n in new_coder_df['ExpectedEarning']:
    if not math.isnan(n):
        earnings.add(n)

print(sorted(earnings))
print(sum(map(lambda n: not math.isnan(n), new_coder_df['ExpectedEarning'])))


print(sorted(incomes))
print(new_coder_df)

has_earnings_df = new_coder_df[new_coder_df['ExpectedEarning'].notnull()]
print(has_earnings_df)
print(sorted(set(n for n in has_earnings_df['ExpectedEarning'])))
print(sum(map(lambda n: not math.isnan(n), has_earnings_df['ExpectedEarning'])))

has_earnings_df.to_csv('with_earnings.csv', index=False)