import java.util.HashMap;
import java.util.Scanner;

public class NumValue {
    static HashMap<String, Integer> keyworkdList = new HashMap<String, Integer>();
    static HashMap<String, Integer> multiplierList = new HashMap<String, Integer>();

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

        multiplierList.put("hundred", 2);
        multiplierList.put("thousand", 3);
        multiplierList.put("million", 6);
        multiplierList.put("billion", 9);
        multiplierList.put("trillion", 12);
        multiplierList.put("quadrillion", 15);
        multiplierList.put("quintillion", 18);
    }

    public static String getNumValue(String numWord) {

        // Actual operations
        String[] splittedString = numWord.split(" ");

        long sum = 0;
        long intermidiaterySum = 0;

        for (int i = 0; i < splittedString.length; i++) {
            if (splittedString[i] == "and" || splittedString[i] == "only") {
                continue;
            }

            if (keyworkdList.containsKey(splittedString[i])) {
                intermidiaterySum += keyworkdList.get(splittedString[i]);
            } else if (multiplierList.containsKey(splittedString[i])) {
                if (splittedString[i].equals("hundred") && intermidiaterySum == 0) {
                    intermidiaterySum = 1;
                }
                intermidiaterySum *= Math.pow(10, multiplierList.get(splittedString[i]));
                if (splittedString[i].equals("hundred")) {
                    continue;
                }
                sum += intermidiaterySum;
                intermidiaterySum = 0;

            }
        }

        if (intermidiaterySum >= 0) {
            sum += intermidiaterySum;
        }
        return String.valueOf(sum);
    }

    public static void main(String... args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number in words: ");
        String numWord = sc.nextLine();

        String finalValue = getNumValue(numWord);
        System.out.println("Numeric representation: " + finalValue);
        sc.close();
    }
}
