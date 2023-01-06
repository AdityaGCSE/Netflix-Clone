#include <bits/stdc++.h>
#define ll long long int

using namespace std;

void solve()
{
    int n;
    cin >> n;
    ll a[n];
    for(int i=0;i<n;i++)
    {
        cin >> a[i];
    }
    sort(a,a+n,greater<ll>());
    
    ll min = a[n-1];
    int minind = n-1;
    
    for(int i=n-1;i>=0;i--)
    {
        if(a[i]<=min)
        {
            min = a[i];
            minind = i;
        }
    }
    
    cout << n*min + minind << endl;
    
}

int main()
{
	#ifndef ONLINE_JUDGE
      freopen("input.txt", "r", stdin);
      freopen("output.txt", "w", stdout);
    #endif
	ll t;
	cin >> t;
	while(t--)
	{
	    solve();
	}
	return 0;
}
