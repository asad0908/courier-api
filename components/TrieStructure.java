import java.util.HashMap;
import java.util.Map;

class Node {
    String word;
    int childrens;
    boolean eow;
    HashMap<String, Node> suffixs;

    public Node(String word) {
        this.word = word;
        this.childrens = 0;
        this.eow = false;
        this.suffixs = new HashMap<>();
    }
}

public class TrieStructure {
    Node root = new Node("");

    public boolean searchWord(String word) {
        StringBuilder subs = new StringBuilder("");
        Node temp = this.root;
        for (int i = 0; i < word.length(); i++) {
            subs.append(word.charAt(i));
            if (temp.suffixs.containsKey(String.valueOf(subs))) {
                temp = temp.suffixs.get(String.valueOf(subs));
                subs.setLength(0);
            }
        }
        if (subs.length() == 0) {
            return temp.eow;
        } else {
            return false;
        }
    }

    public String appendSpace(int level) {
        StringBuilder space = new StringBuilder("");
        for (int i = 0; i < level; i++) {
            space.append("  ");
        }
        return String.valueOf(space);
    }

    public void printTree(Node startPoint, StringBuilder xml, int level) {
        if (startPoint == this.root) {
            xml.append("<TG>\n");
        }
        if (startPoint.childrens == 0) {
            xml.append(this.appendSpace(level) + "<SN value=\"" + startPoint.word + "\" flag=\"" + startPoint.eow
                    + "\" >\n");
            xml.append(this.appendSpace(level) + "</SN>\n");
            return;
        }
        if (startPoint.word.length() > 0) {
            xml.append(this.appendSpace(level) + "<SN value=\"" + startPoint.word + "\" flag=\"" + startPoint.eow
                    + "\">\n");
        }
        for (Map.Entry<String, Node> entry : startPoint.suffixs.entrySet()) {
            Node value = entry.getValue();
            this.printTree(value, xml, level + 1);
        }
        if (startPoint.word.length() > 0) {
            xml.append(this.appendSpace(level) + "</SN>\n");
        }
        if (startPoint == this.root) {
            xml.append("</TG>\n");
        }
    }

    public void printTree(Node startPoint, StringBuilder xml) {
        int level = 0;
        this.printTree(startPoint, xml, level);
    }

    public Node[] getPositionOf(String word) {
        StringBuilder subs = new StringBuilder("");
        Node child = this.root;
        Node parent = this.root;
        Node[] parentChild = new Node[2];
        for (int i = 0; i < word.length(); i++) {
            subs.append(word.charAt(i));
            if (child.suffixs.containsKey(String.valueOf(subs))) {
                parent = child;
                child = child.suffixs.get(String.valueOf(subs));
                subs.setLength(0);
            }
        }
        parentChild[0] = parent;
        parentChild[1] = child;
        if (subs.length() == 0) {
            return parentChild;
        } else {
            return null;
        }
    }

    public void deleteWord(String word) {
        if (!this.searchWord(word)) {
            System.out.println("Cannot find " + word + " in tree");
            return;
        }
        Node[] parentChild = this.getPositionOf(word);

        Node parent = parentChild[0];
        Node child = parentChild[1];

        if (child.childrens == 0) {
            parent.suffixs.remove(child.word);
            parent.childrens--;
            return;
        }

        if (child.childrens == 1) {
            // get the only children of it and merge it
            StringBuilder key = new StringBuilder("");
            for (Map.Entry<String, Node> entry : child.suffixs.entrySet()) {
                key.append(entry.getKey());
            }
            Node grandChild = child.suffixs.get(String.valueOf(key));
            StringBuilder finalString = new StringBuilder(child.word);
            finalString.append(grandChild.word);

            parent.suffixs.remove(child.word);
            parent.suffixs.put(String.valueOf(finalString), new Node(String.valueOf(finalString)));
            parent.suffixs.get(String.valueOf(finalString)).eow = true;
        }

        if (child.childrens > 1 && parent.childrens > 1) {
            child.eow = false;
            parent.childrens--;
            return;
        }
    }

    public void insertWord(String word) {

        // NOTE: DEVELOPMENT PENDING(UNDER CONSTRUCTION)!

        Node temp = this.root;
        Node prefix = null;
        for (Map.Entry<String, Node> entry : temp.suffixs.entrySet()) {
            if (entry.getKey().charAt(0) == word.charAt(0)) {
                prefix = entry.getValue();
                break;
            }
        }
        if (prefix == null) {
            temp.suffixs.put(word, new Node(word));
            temp.suffixs.get(word).eow = true;
            temp.childrens++;
            return;
        }

        int indexTillSame = 0;
        while (indexTillSame < word.length() && indexTillSame < prefix.word.length()
                && word.charAt(indexTillSame) == prefix.word.charAt(indexTillSame)) {
            indexTillSame++;
        }

        if (prefix.word.length() == indexTillSame) {
            prefix.suffixs.put(word.substring(indexTillSame - 1), new Node(word.substring(indexTillSame - 1)));
            prefix.suffixs.get(word.substring(indexTillSame - 1)).eow = true;
            prefix.childrens++;
            return;
        }

        String newWord = prefix.word.substring(indexTillSame);
        prefix.suffixs.put(newWord, new Node(newWord));
        prefix.suffixs.get(newWord).eow = true;
        prefix.suffixs.get(newWord).childrens++;
        // prefix.suffixs.get(newWord).suffixs = prefix.suffixs;
        // prefix.suffixs.get(newWord).childrens = prefix.childrens;
        // HashMap<String, Node> tempMap = prefix.suffixs.get(newWord).suffixs;
        // prefix.suffixs.clear();
        // prefix.suffixs = tempMap;
        // prefix.childrens = 1;
        System.out.println(newWord);

    }

    public void makeAFakeTree() {
        Node temp = this.root;

        temp.suffixs.put("PA", new Node("PA"));
        temp.childrens++;
        temp = temp.suffixs.get("PA");
        temp.suffixs.put("TTERN", new Node("TTERN"));
        temp.childrens++;
        temp.suffixs.put("IN", new Node("IN"));
        temp.childrens++;
        temp.suffixs.put("N", new Node("N"));
        temp.childrens++;
        temp = temp.suffixs.get("IN");
        temp.suffixs.put("ING", new Node("ING"));
        temp.childrens++;
        temp.suffixs.put("T", new Node("T"));
        temp.childrens++;

        temp = this.root;
        temp = temp.suffixs.get("PA");
        temp = temp.suffixs.get("TTERN");
        temp.eow = true;

        temp = this.root;
        temp = temp.suffixs.get("PA");
        temp = temp.suffixs.get("IN");
        temp.eow = true;
        temp = temp.suffixs.get("T");
        temp.eow = true;

        temp = this.root;
        temp = temp.suffixs.get("PA");
        temp = temp.suffixs.get("IN");
        temp = temp.suffixs.get("ING");
        temp.eow = true;

        temp = this.root;
        temp = temp.suffixs.get("PA");
        temp = temp.suffixs.get("N");
        temp.eow = true;
    }
}
