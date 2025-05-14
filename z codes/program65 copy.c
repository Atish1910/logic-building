#include<stdio.h>
#include<stdbool.h>

// 9669
bool CheckPallindrome(int iNo)
{
    int iDigit = 0;
    int iReverse = 0;
    int iTemp = iNo;

    while(iNo != 0)
    {
        // iDigit = 9669 % 10; = 9
        // iDigit = 966 % 10; = 6
        // iDigit = 96 % 10; = 6
        // iDigit = 9 % 10; = 9
        iDigit = iNo % 10;
        // iReverse = (0 * 10)+9; = 9
        // iReverse = (9 * 10)+6; = 96
        // iReverse = (96 * 10)+6; = 966
        // iReverse = (966 * 10)+9; = 9669
        iReverse = (iReverse * 10)+iDigit;
        // iNo =  = 9669
        // iNo =  = 966
        // iNo =  = 96
        // iNo =  = 9
        iNo = iNo / 10;
    }

    return (iReverse == iTemp);
    
}

int main()
{
    int iValue = 0;
    bool bRet = false;

    printf("Enter number : \n");
    scanf("%d",&iValue);

    bRet = CheckPallindrome(iValue);

    if(bRet)
    {
        printf("%d is a pallindrome number\n",iValue);
    }
    else
    {
        printf("%d is not a pallindrome number\n",iValue);
    }
    
    return 0;
}
