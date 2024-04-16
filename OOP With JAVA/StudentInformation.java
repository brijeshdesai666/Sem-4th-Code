import java.io.*;
import java.util.*;
public class StudentInformation {
    public static void main(String[] args) {
        System.out.println("Enter student info");
        try {
            FileOutputStream fout = new FileOutputStream("info.txt");
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter Name");
            String name = sc.nextLine();
            System.out.println("Enter Sem");
            String sem = sc.nextLine();
            System.out.println("Enter course");
            String cr = sc.nextLine();
            String str = "Name: "+name+"\n"+"Sem: "+sem+"\n"+"course: "+cr;
            byte b[] = str.getBytes();
            fout.write(b);
            fout.close();
        }catch (Exception e){

        }
        System.out.println("--------------Student Info-------------");
        try{
            FileInputStream fin = new FileInputStream("info.txt");
            int i = 0;
            while ((i= fin.read()) != -1){
                System.out.print((char) i);

            }
            fin.close();
        }
        catch (Exception e){}

    }
}
