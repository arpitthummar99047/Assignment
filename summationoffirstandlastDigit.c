#include <stdio.h>
int main()
{
    int n, sum=0, first, last;
    printf("Enter number to find sum of first and last digit = ");
    scanf("%d", &n);
    
    last = n % 10;
    
    while(n >= 10)
    {
        n = n / 10;
    }
    first = n;
    
    sum = first + last;
    printf("Sum of first and last digit = %d ", sum);
    return 0;
}