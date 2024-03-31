class A extends Thread{
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("Class A" + i);
        }
    }
}
class B extends Thread{
    public void run() {
        for (int j = 0; j < 5; j++) {
            System.out.println("Class B " + j);
        }
    }
}
public class TheredJAVA {
    public static void main(String[] args) {
        A a1 = new A();
        B b1 = new B();
        a1.start();
        b1.start();
    }
}
