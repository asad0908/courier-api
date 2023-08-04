import java.util.HashMap;
import java.util.Scanner;

class LongNum {
    static StringBuilder trillion = new StringBuilder("000");
    static StringBuilder billion = new StringBuilder("000");
    static StringBuilder million = new StringBuilder("000");
    static StringBuilder thousand = new StringBuilder("000");
    static StringBuilder remaining = new StringBuilder("000");

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

    public static void returnAll() {
        System.out.println(String.valueOf(trillion) + String.valueOf(billion) + String.valueOf(million)
                + String.valueOf(thousand) + String.valueOf(remaining));
    }
}

public class WordsToNumeric {
    public static void main(String... args) {

        // generate hashmaps
        HashMap<String, Integer> keyworkdList = new HashMap<String, Integer>();
        HashMap<String, Integer> multiplierList = new HashMap<String, Integer>();
        Scanner sc = new Scanner(System.in);

        int[] nums = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80,
                90 };
        String[] words = { "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
                "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
                "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" };

        for (int i = 0; i < nums.length; i++) {
            keyworkdList.put(words[i], nums[i]);
        }

        int[] multipliers = { 2, 3, 6, 9, 12, 15, 18 };

        String[] multiplierWords = { "hundred", "thousand", "million", "billion", "trillion", "quadrillion",
                "quintillion" };

        for (int i = 0; i < multipliers.length; i++) {
            multiplierList.put(multiplierWords[i], multipliers[i]);
        }

        // Actual operation
        System.out.print("Enter the number in words: ");
        String numWord = sc.nextLine();

        String[] splittedString = numWord.split(" ");

        LongNum.addTrillion("123");
        LongNum.addBillion("543");
        LongNum.addMillion("233");
        LongNum.addThousand("044");
        LongNum.addOthers("006");
        LongNum.returnAll();
    }
}
