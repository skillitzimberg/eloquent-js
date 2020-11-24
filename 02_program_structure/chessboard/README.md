# Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

```
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

### Here's how I thought about the problem:

Each line is 8 characters long plus a CRNF (\n).  
Each line is either even or odd (line 0, line 1, line 2, line 3, etc.).  
If a line is even it begins with a space. Otherwise it begins with a #.

When row is even & col is even print space  
When row is even & col is odd print char  
When row is even & col is even print space  
When row is even & col is odd print char  
When row is even & col is even print space  
When row is even & col is odd print char  
When row is even & col is even print space  
When row is even & col is odd print char  
When row is even & col is 9 print \n

When row is odd & col is even print char  
When row is odd & col is odd print space  
When row is odd & col is even print space  
When row is odd & col is odd print space  
When row is odd & col is even print space  
When row is odd & col is odd print space  
When row is odd & col is even print space  
When row is odd & col is odd print space  
When row is odd & col is 9 print \n

Which comes down to when row % 2 & column % 2 are equal print a space (" "), otherwise print an octothorpe ("#").
Print a CRNF (\n) when finished with a row.
