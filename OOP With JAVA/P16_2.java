import java.util.Scanner;

public class P16_2 {
    public static void main(String[] args) {
        int pro = 1;
        int[] a = new int[5];
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter value for array ");
        for (int i = 0; i < 5; i++){
            a[i] = sc.nextInt();
            pro = pro*a[i];
        }
        System.out.println("The product is " + pro);
    }
}
