# Takes in a raw multiline string "board" and SIZExSIZE board
def print_board():
    for row in GRID:
        print(' '.join(str(num) for num in row))

def ready_board(board):
    global GRID, SIZE, BOX_LENGTH
    # Turn the string into a 2D array
    GRID = [[int(c) if c.isdigit() else 0 for c in list(row.strip())] for row in board.splitlines()]
    SIZE = len(GRID)
    BOX_LENGTH = int(SIZE ** 0.5)
def is_sudoku_valid(board):
    ready_board(board)
    return solve()
def solve():
    global GRID, SIZE
    for r in range(SIZE):
        for c in range(SIZE):
            if GRID[r][c] == 0:
                for n in range(1, SIZE+1):
                    if is_possible(r, c, n):
                        GRID[r][c] = n
                        if solve():
                            return True
                        GRID[r][c] = 0 # backtracking
                return False
    return True
# get board state when n is inserted in (r,c)
def is_possible(r, c, n):
    global GRID, SIZE, BOX_LENGTH
    return is_valid_row(r, n) and is_valid_col(c, n) and is_valid_box(r, c, n)

def is_valid_row(r, n):
    global GRID, SIZE
    return not any([GRID[r][i] == n for i in range(SIZE)])

def is_valid_col(c, n):
    global GRID, SIZE
    return not any([GRID[i][c] == n for i in range(SIZE)])

def is_valid_box(r, c, n):
    global GRID, BOX_LENGTH
    corner_c = (c // BOX_LENGTH) * BOX_LENGTH
    corner_r = (r // BOX_LENGTH) * BOX_LENGTH
    return not any([GRID[corner_r + i][corner_c + j] == n for i in range(BOX_LENGTH) for j in range(BOX_LENGTH)])



#================================================================================================


# Typical/intended solution
# this works even if there are foreign characters in the string
def is_parenthesis_valid(s):
    stack = [] # uses a stack to match corresponding pairs
    for c in s: # it means it's still legal to do {([ as long as the next character is ]
        if c in {'(', '[', '{'}:
            stack.append(c)
        elif c in {')', ']', '}'}:
            if len(stack) == 0:
                return False
            elif c == ')' and stack[-1] == '(':
                stack.pop()
            elif c == ']' and stack[-1] == '[':
                stack.pop()
            elif c == '}' and stack[-1] == '{':
                stack.pop()
            else:
                return False
    return True  

# my unique solution 
# Essentially it collapses the string by removing valid pairs. This does not work if there are foreign characters.
# If the .replace() operations ran but the string is still the same, then the string is invalid.
def is_parenthesis_valid_oneline(s):
    return True if len(s) == 0 else False if len(s) == len(s.replace('()', '').replace('[]', '').replace('{}', '')) else is_parenthesis_valid_oneline(s.replace('()', '').replace('[]', '').replace('{}', ''))

if __name__ == "__main__":
    # is_valid_parenthesis unit tests
    tcs = ["()", "()[]{}", "(]", "([)]", "{[]}", "", "}{"]
    tcs_tv = [True, True, False, False, True, True, False]
    for i in range(len(tcs)):
        assert is_parenthesis_valid_oneline(tcs[i]) == tcs_tv[i]
        assert is_parenthesis_valid(tcs[i]) == tcs_tv[i]
        print(f"[Valid Parenthesis] Test case {i} passed")
    # sudoku tests
    print("Sudoku tests")
    board = """53..7....
                6..195...
                .98....6.
                8...6...3
                4..8.3..1
                7...2...6
                .6....28.
                ...419..5
                ....8..79"""
    boards = [
        """...26.7.1
            68..7..9.
            19...45..
            82.1...4.
            ..46.29..
            .5...3.28
            ..93...74
            .4..5..36
            7.3.18...""",
        """2..9..... 
            .......6.
            .....1...
            5.26..4.7
            .....41..
            ....98.23
            .....3.8.
            ..5.1....
            ..7......""",
        """53..7....
            6..195...
            .98....6.
            8...6...3
            4..8.1..1
            7...2...6
            .6....28.
            ...419..5
            ....8..79"""
    ]
    solvable = [True, False, False]
    for i in range(len(boards)):
        # Test case 2 will take a while because it's an impossible board. That TC came from my MIPS assembly tests that took 40 minutes to execute.
        assert is_sudoku_valid(boards[i]) == solvable[i]
        print(f"[Sudoku] Test case {i} passed")