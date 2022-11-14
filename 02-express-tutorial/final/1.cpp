// Welcome to "favtutor"
#include <iostream>
#include <stack>
using namespace std;
int main()
{
    stack<int> stack; // creating a stack of int type
    stack.push(10);   // push operation
    stack.push(5);
    stack.push(26);
    stack.push(52);

    stack.pop(); // pop operation
    stack.pop();

    while (!stack.empty())
    {                               // if stack is not empty
        cout << stack.top() << " "; // print the top element
        stack.pop();                // removed the top element
    }
}
