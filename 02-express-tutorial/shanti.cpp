#include <bits/stdc++.h>
using namespace std;
set<int> s;
void primeFactors(int n)
{

    while (n % 2 == 0)
    {
        s.insert(2);
        n = n / 2;
    }
    for (int i = 3; i <= sqrt(n); i = i + 2)
    {
        while (n % i == 0)
        {
            s.insert(i);

            n = n / i;
        }
    }
    if (n > 2)
    {
        s.insert(n);
    }
}
int main()
{

    int a;
    int n;
    cin >> a >> n;
    int ans = 1;
    primeFactors(n);
    set<int>::iterator itr;
    for (itr = s.begin();
         itr != s.end(); itr++)
    {
        if (a % (*itr) == 1)
        {
            ans = 2;
            break;
        }
    }
    if (ans == 2)
    {
        cout << "no" << endl;
    }
    else
    {
        cout << "yes" << endl;
    }
    return 0;
}
