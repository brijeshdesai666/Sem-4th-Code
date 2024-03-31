public class tryCatch {
    public static void main(String[] args) {
        try{
            int a = 10/0;
            int x[] = {1,2,3};
            System.out.println(a);
            System.out.println(x[3]);
        }catch (ArithmeticException e){
            System.out.println(e.getMessage());
        }catch (ArrayIndexOutOfBoundsException ae){
            System.out.println(ae.getMessage());
        }
    }
}
