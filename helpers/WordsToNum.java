import java.util.HashMap;
import java.util.Scanner;

class LongNum {
    static StringBuilder quintillion = new StringBuilder("000");
    static StringBuilder quadrillion = new StringBuilder("000");
    static StringBuilder trillion = new StringBuilder("000");
    static StringBuilder billion = new StringBuilder("000");
    static StringBuilder million = new StringBuilder("000");
    static StringBuilder thousand = new StringBuilder("000");
    static StringBuilder remaining = new StringBuilder("000");

    public static void addQuintillion(String quintillionValue) {
        // handle three cases if billion has three places: 0,1,2
        quintillion.delete(0, quintillionValue.length());
        quintillion.append(quintillionValue);
    }

    public static void addQuadrillion(String quadrillionVal) {
        // handle three cases if billion has three places: 0,1,2
        quadrillion.delete(0, quadrillionVal.length());
        quadrillion.append(quadrillionVal);
    }

    public static void addTrillion(String trillionValue) {
        // handle three cases if billion has three places: 0,1,2
        trillion.delete(0, trillionValue.length());
        trillion.append(trillionValue);
    }

    public static void addBillion(String billionValue) {
        // handle three cases if billion has three places: 0,1,2
        billion.delete(0, billionValue.length());
        billion.append(billionValue);
    }

    public static void addMillion(String millionValue) {
        // handle three cases if billion has three places: 0,1,2
        million.delete(0, millionValue.length());
        million.append(millionValue);
    }

    public static void addThousand(String thousandValue) {
        // handle three cases if billion has three places: 0,1,2
        thousand.delete(0, thousandValue.length());
        thousand.append(thousandValue);
    }

    public static void addOthers(String otherValue) {
        // handle three cases if billion has three places: 0,1,2
        remaining.delete(0, otherValue.length());
        remaining.append(otherValue);
    }

    public static String trimLeadingZeros(String longString) {
        for (int i = 0; i < longString.length(); i++) {
            if (longString.charAt(i) != '0') {
                return longString.substring(i);
            }
        }
        return "";
    }

    public static void returnAll() {
        String mergeAll = String.valueOf(quintillion) + String.valueOf(quadrillion) + String.valueOf(trillion)
                + String.valueOf(billion) + String.valueOf(million)
                + String.valueOf(thousand) + String.valueOf(remaining);
        System.out.println(trimLeadingZeros(mergeAll));
    }
}

public class WordsToNum {

    static HashMap<String, Integer> keyworkdList = new HashMap<String, Integer>();

    static {
        keyworkdList.put("one", 1);
        keyworkdList.put("two", 2);
        keyworkdList.put("three", 3);
        keyworkdList.put("four", 4);
        keyworkdList.put("five", 5);
        keyworkdList.put("six", 6);
        keyworkdList.put("seven", 7);
        keyworkdList.put("eight", 8);
        keyworkdList.put("nine", 9);
        keyworkdList.put("ten", 10);
        keyworkdList.put("eleven", 11);
        keyworkdList.put("twelve", 12);
        keyworkdList.put("thirteen", 13);
        keyworkdList.put("fourteen", 14);
        keyworkdList.put("fifteen", 15);
        keyworkdList.put("sixteen", 16);
        keyworkdList.put("seventeen", 17);
        keyworkdList.put("eighteen", 18);
        keyworkdList.put("nineteen", 19);
        keyworkdList.put("twenty", 20);
        keyworkdList.put("thirty", 30);
        keyworkdList.put("forty", 40);
        keyworkdList.put("fifty", 50);
        keyworkdList.put("sixty", 60);
        keyworkdList.put("seventy", 70);
        keyworkdList.put("eighty", 80);
        keyworkdList.put("ninety", 90);
    }

    public static void getNumValue(String numWord) {

        String[] splittedString = numWord.split(" ");

        int sum = 0;

        for (int i = 0; i < splittedString.length; i++) {
            if (splittedString[i] == "and" || splittedString[i] == "only") {
                continue;
            }

            if (keyworkdList.containsKey(splittedString[i])) {
                sum += keyworkdList.get(splittedString[i]);
            }

            if (splittedString[i].equals("hundred")) {
                sum *= 100;
            }

            if (splittedString[i].equals("quintillion")) {
                LongNum.addQuintillion(String.valueOf(sum));
                sum = 0;
            } else if (splittedString[i].equals("quadrillion")) {
                LongNum.addQuadrillion(String.valueOf(sum));
                sum = 0;
            } else if (splittedString[i].equals("trillion")) {
                LongNum.addTrillion(String.valueOf(sum));
                sum = 0;
            } else if (splittedString[i].equals("billion")) {
                LongNum.addBillion(String.valueOf(sum));
                sum = 0;
            } else if (splittedString[i].equals("million")) {
                LongNum.addMillion(String.valueOf(sum));
                sum = 0;
            } else if (splittedString[i].equals("thousand")) {
                LongNum.addThousand(String.valueOf(sum));
                sum = 0;
            }

        }

        if (sum >= 0) {
            LongNum.addOthers(String.valueOf(sum));
        }

        LongNum.returnAll();
    }

    public static void main(String... args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number in words: ");
        String numWord = sc.nextLine();

        getNumValue(numWord);

        sc.close();
    }
}