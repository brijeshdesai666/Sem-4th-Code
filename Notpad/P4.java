import java.util.*;

public class P4{
	public static void main(String s[]){
	Scanner sc = new Scanner(System.in);
	String name;
	System.out.println("Enter String");
	name = sc.nextLine();
	int len = name.length();
	int hLen = len/2;
	System.out.println("the Length of the is "+hLen);
	System.out.println("The second half of the string is "+ name.substring(hLen));	
}
}