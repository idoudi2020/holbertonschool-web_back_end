#!/usr/bin/env python3
"""function named index_range that takes two integer arguments"""


def index_range(page: int, page_size: int) -> tuple:
    """return a tuple of size two containing a start index and an end index"""

    last = page_size * page
    first = (page - 1) * page_size
    return (first, last)
