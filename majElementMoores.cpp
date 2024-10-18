#include<iostream>
#include<vector>
using namespace std;
int fun(vector<int>&a){
    int count=0,ans;
    for (int val:a){
        if(count==0){
            ans=val;
        }
        if(val==ans){
            count++;
        }else{
            count--;
        }
    }
    int i=0;
    for(int val:a){ 
        if(val==ans)
            i++;
}if(i>a.size()/2){
    return ans;
}
else{
    return -1;
}
}
int main(){
    vector<int>arr={2,2,2,1,2};
    cout<<fun(arr);
    
    return 0;
}