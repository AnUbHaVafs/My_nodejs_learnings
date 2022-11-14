#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, k;
    cin >> n >> k;
    int arr[n][6];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < 6; j++)
        {
            cin >> arr[i][j];
        }
    }
    vector<int> v(n, 0);
    vector<int> rank(n, 0);
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < 6; j++)
        {
            sum += arr[i][j];
        }
        v[i] = sum;
        sum = 0;
    }

    int top = 0;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (v[i] + 200 < v[j])
            {
                top++;
            }
        }
        rank[i] = top + 1;
        top = 0;
    }
    for (int i = 0; i < n; i++)
    {
        if (rank[i] <= k)
        {
            cout << "+" << rank[i];
        }
        else
        {
            cout << "-" << rank[i];
        }
    }

    return 0;
}