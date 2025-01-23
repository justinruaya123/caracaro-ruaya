# Typical/intended solution
# this works even if there are foreign characters in the string
def is_parenthesis_valid(s):
    stack = []
    for c in s:
        if c in {'(', '[', '{'}:
            stack.append(c)
        elif c in {')', ']', '}'}:
            if len(stack) == 0:
                return False
            elif c == ')' and stack[-1] == '(':
                stack.pop()
            elif c == ']' and stack[-1] == '[':
                stack.pop()
            if c == '}' and stack[-1] == '{':
                stack.pop()
            else:
                return False
    return True  

# my unique solution 
# Essentially it collapses the string by removing valid pairs. This does not work if there are foreign characters.
def is_parenthesis_valid_oneline(s):
    return True if len(s) == 0 else False if len(s) == len(s.replace('()', '').replace('[]', '').replace('{}', '')) else is_parenthesis_valid_oneline(s.replace('()', '').replace('[]', '').replace('{}', ''))

if __name__ == "__main__":
    tcs = ["()", "()[]{}", "(]", "([)]", "{[]}", "", "}{"]
    tcs_tv = [True, True, False, False, True, True, False]
    for i in range(len(tcs)):
        assert is_parenthesis_valid_oneline(tcs[i]) == tcs_tv[i]
        print(f"[Valid Parenthesis] Test case {i} passed")