#include<stdio.h>
int main()

{
    int n;

    printf("Enter the integer number\n");
    scanf("%d",&n);
    
    
    if(n % 2 == 0) 
    printf("%d is Even number\n", n);
    else
    (printf("%d is Odd  number\n", n));  
  
  return 0;
    
}
