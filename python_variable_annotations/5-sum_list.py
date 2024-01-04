#!/usr/bin/env python3
'''
This module provides a function to sum a list of floats.
'''
from typing import List


def sum_list(input_list: List[float]) -> float:
    '''
    type-annotated function sum_list which takes a list input_list of floats
    as argument and returns their sum as a float
    '''
    return sum(input_list)
