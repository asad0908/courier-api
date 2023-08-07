public class TestTrie {
    public static void main(String... args) {
        TrieStructure ts = new TrieStructure();

        // create a fake tree structure as mentioned in the question
        ts.makeAFakeTree();

        // print xml
        StringBuilder xmlData = new StringBuilder("");
        ts.printTree(ts.root, xmlData);
        System.out.println(xmlData);

        // search for words
        System.out.println("Search for words");
        System.out.println("===============================");
        System.out.println(ts.searchWord("PA"));
        System.out.println(ts.searchWord("PAIN"));
        System.out.println(ts.searchWord("PAINING"));
        System.out.println(ts.searchWord("PATTERN"));
        System.out.println(ts.searchWord("PAN"));
        System.out.println(ts.searchWord("PAT"));
        System.out.println(ts.searchWord("PAINT"));
        System.out.println("===============================");

        // test delete
        ts.deleteWord("PAINT");
        ts.deleteWord("PAIN");

        System.out.println();
        System.out.println("Check deletion");
        System.out.println("===============================");
        System.out.println(ts.searchWord("PAINT"));
        System.out.println(ts.searchWord("PAIN"));
        System.out.println("===============================");

        // print final tree structure
        xmlData.setLength(0);
        ts.printTree(ts.root, xmlData);
        System.out.println(xmlData);
    }
}
