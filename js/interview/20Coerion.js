// Summary Table
// Expression	Coerced Value	Explanation
// Boolean([])	                true	                          Empty arrays are truthy
// [] == false	                true	                          [] → "" → 0, false → 0
// +[]	                        0	                              [] → "" → 0
// [] + 1	                      "1"	                            [] → "", "" + 1 = "1"
// Takeaway:
// Type coercion can lead to unexpected results, so it's recommended to use strict equality (===) to avoid implicit conversions.