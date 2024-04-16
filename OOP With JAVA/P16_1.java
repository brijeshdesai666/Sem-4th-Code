public class P16_1{
    public static void main(String[] args) {
       int a[] = {2,4,1,5,7};
       int len = a.length;
        System.out.println("Smallest element is " + Findmin(a, len));
    }
    static int Findmin(int a[], int len){
        if (len==1){
            return a[0];
        }else {
            return Math.min(a[len-1], Findmin(a, len-1));
        }
    }
}