#include<iostream>
#include<algorithm>
#include<cstdio>
#include<cstdlib>
bool check(char s[260]){
	int top=0,i=0;
	while(s[i]!='@'){
		if(s[i]=='(') top++;
		if(s[i]==')') top--;
		i++;
		if(top<0)return 0;
	}
	if(top==0)return 1;
	else return 0;
}
using namespace std;
int main(){
	char s[260];cin>>s;
	if(check(s)) cout<<"YES";
	else cout<<"NO";
	return 0;
}
