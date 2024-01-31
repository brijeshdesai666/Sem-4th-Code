import java.util.*;

public class P5{
	public static void main(String s[]){
	Scanner sc = new Scanner(System.in);

	String name;
	System.out.println("Enter name");
	name = sc.nextLine();
	name = name.toLowerCase();
	int c=0, v=0;

	int len = name.length();

	for(int i=0;i<len;i++){
	if(name.charAt(i) == 'a' || name.charAt(i) == 'e'|| name.charAt(i) == 'i' || name.charAt(i) == 'o'|| name.charAt(i) == 'u' ){
	v++;
}else if(name.charAt(i) >= 'a' && name.charAt(i) <= 'z'){
	c++;
}
}

	System.out.println("Number of vovel = " + v + " and number of consonant ="+c);
	
}
}