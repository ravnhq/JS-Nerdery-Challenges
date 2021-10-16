# Copyright (C) 2021 Kevin Del Castillo Ramírez
# 
# This file is part of Module1.
# 
# Module1 is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# 
# Module1 is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# 
# You should have received a copy of the GNU General Public License
# along with Module1.  If not, see <http://www.gnu.org/licenses/>.

import math

def own_power(n, digits):
    powers = sum([i ** i for i in range(1, n + 1)])
    return f"{powers % (10 ** digits)}"

print(f"own_power(10, 3) = {own_power(10, 3)}")
print(f"own_power(12, 7) = {own_power(12, 7)}")
print(f"own_power(21, 12) = {own_power(21, 12)}")


def digit_sum(n):
    fact = math.factorial(n)
    res = 0
    while fact != 0:
        res += fact % 10
        fact = fact // 10
    return res 

print()
print(f"digit_sum(10) = {digit_sum(10)}")
print(f"digit_sum(42) = {digit_sum(42)}")
print(f"digit_sum(71) = {digit_sum(71)}")
print(f"digit_sum(89) = {digit_sum(89)}")