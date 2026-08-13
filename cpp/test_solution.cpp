#include "solution.h"
#include <cassert>
#include <iostream>
#include <string>
#include <vector>
#include <utility>

int main() {
    // Three-node cycle
    {
        std::vector<std::pair<std::string,std::string>> edges = {
            {"a","b"}, {"b","c"}, {"c","a"}
        };
        assert(hasCycle(edges) == true);
    }

    // Diamond DAG — no cycle
    {
        std::vector<std::pair<std::string,std::string>> edges = {
            {"a","b"}, {"a","c"}, {"b","d"}, {"c","d"}
        };
        assert(hasCycle(edges) == false);
    }

    // Self-loop
    {
        std::vector<std::pair<std::string,std::string>> edges = {
            {"a","a"}
        };
        assert(hasCycle(edges) == true);
    }

    // Empty edge list
    {
        std::vector<std::pair<std::string,std::string>> edges = {};
        assert(hasCycle(edges) == false);
    }

    // Disjoint components — only one has a cycle
    {
        std::vector<std::pair<std::string,std::string>> edges = {
            {"x","y"}, {"y","z"}, {"p","q"}, {"q","p"}
        };
        assert(hasCycle(edges) == true);
    }

    std::cout << "All tests passed" << std::endl;
    return 0;
}
