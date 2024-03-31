
import java.io.*;

public class IO {
    public static void main(String[] args) {
        try {
            PrintWriter pw = new PrintWriter(new FileOutputStream(new File("123.txt"),true));
            for(int i = 0; i<150;i++){
                pw.print((int)(Math.random()*150)+" ");
            }
            System.out.println("Data written");
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
