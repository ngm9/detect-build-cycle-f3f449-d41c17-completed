import pytest
from solution import has_cycle


def test_three_node_cycle():
    edges = [("a", "b"), ("b", "c"), ("c", "a")]
    assert has_cycle(edges) is True


def test_diamond_dag_no_cycle():
    edges = [("a", "b"), ("a", "c"), ("b", "d"), ("c", "d")]
    assert has_cycle(edges) is False


def test_self_loop():
    edges = [("a", "a")]
    assert has_cycle(edges) is True


def test_empty_edges():
    edges = []
    assert has_cycle(edges) is False


def test_disjoint_components_one_has_cycle():
    edges = [("x", "y"), ("y", "z"), ("p", "q"), ("q", "p")]
    assert has_cycle(edges) is True
