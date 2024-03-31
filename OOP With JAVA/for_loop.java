public class for_loop {
    static int sum(int ...arr){
        int result = 0;
        for(int a:arr){
            result += a;
        }
        return result;
    }
    public static void main(String[] args) {
        System.out.println("Sum is " + sum(1, 2, 3, 4, 5));
        System.out.println("Sum is " + sum(1, 2, 3, 5));
        System.out.println("Sum is " + sum(1, 3, 4, 5));
    }
}
