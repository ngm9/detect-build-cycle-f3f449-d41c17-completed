import org.junit.jupiter.api.Test;
import java.util.Arrays;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

public class SolutionTest {

    private final Solution solution = new Solution();

    @Test
    public void testThreeNodeCycle() {
        List<String[]> edges = Arrays.asList(
            new String[]{"a", "b"},
            new String[]{"b", "c"},
            new String[]{"c", "a"}
        );
        assertTrue(solution.hasCycle(edges));
    }

    @Test
    public void testDiamondDagNoCycle() {
        List<String[]> edges = Arrays.asList(
            new String[]{"a", "b"},
            new String[]{"a", "c"},
            new String[]{"b", "d"},
            new String[]{"c", "d"}
        );
        assertFalse(solution.hasCycle(edges));
    }

    @Test
    public void testSelfLoop() {
        List<String[]> edges = Arrays.asList(
            new String[]{"a", "a"}
        );
        assertTrue(solution.hasCycle(edges));
    }

    @Test
    public void testEmptyEdges() {
        assertTrue(!solution.hasCycle(Arrays.asList()));
    }

    @Test
    public void testDisjointComponentsOneCycle() {
        List<String[]> edges = Arrays.asList(
            new String[]{"x", "y"},
            new String[]{"y", "z"},
            new String[]{"p", "q"},
            new String[]{"q", "p"}
        );
        assertTrue(solution.hasCycle(edges));
    }
}
