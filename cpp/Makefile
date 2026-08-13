CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra -o

test: solution.cpp test_solution.cpp solution.h
	$(CXX) $(CXXFLAGS) test_runner solution.cpp test_solution.cpp
	./test_runner

clean:
	rm -f test_runner
