var searchIndex = {};
searchIndex["linked_hash_map"] = {"doc":"A `HashMap` wrapper that holds key-value pairs in insertion order.","items":[[3,"LinkedHashMap","linked_hash_map","A linked hash map.",null,null],[3,"Iter","","An insertion-order iterator over a `LinkedHashMap`'s entries, with immutable references to the values.",null,null],[3,"IterMut","","An insertion-order iterator over a `LinkedHashMap`'s entries, with mutable references to the values.",null,null],[3,"IntoIter","","A consuming insertion-order iterator over a `LinkedHashMap`'s entries.",null,null],[3,"Entries","","An insertion-order iterator over a `LinkedHashMap`'s entries represented as an `OccupiedEntry`.",null,null],[3,"Keys","","An insertion-order iterator over a `LinkedHashMap`'s keys.",null,null],[3,"Values","","An insertion-order iterator over a `LinkedHashMap`'s values.",null,null],[3,"OccupiedEntry","","A view into a single occupied location in a `LinkedHashMap`.",null,null],[3,"VacantEntry","","A view into a single empty location in a `LinkedHashMap`.",null,null],[4,"Entry","","A view into a single location in a map, which may be vacant or occupied.",null,null],[13,"Occupied","","An occupied Entry.",0,null],[13,"Vacant","","A vacant Entry.",0,null],[0,"serde","","An optional implementation of serialization/deserialization. Reference implementations used:",null,null],[3,"LinkedHashMapVisitor","linked_hash_map::serde","`serde::de::Visitor` for a linked hash map.",null,null],[11,"serialize","linked_hash_map","",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"result"}}],[11,"new","linked_hash_map::serde","Creates a new visitor for a linked hash map.",2,{"inputs":[],"output":{"name":"self"}}],[11,"expecting","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"fmtresult"}}],[11,"visit_unit","","",2,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"visit_map","","",2,{"inputs":[{"name":"self"},{"name":"visitor"}],"output":{"name":"result"}}],[11,"deserialize","linked_hash_map","",1,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"heap_size_of_children","","",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"new","","Creates a linked hash map.",1,{"inputs":[],"output":{"name":"self"}}],[11,"with_capacity","","Creates an empty linked hash map with the given initial capacity.",1,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"with_hasher","","Creates an empty linked hash map with the given initial hash builder.",1,{"inputs":[{"name":"s"}],"output":{"name":"self"}}],[11,"with_capacity_and_hasher","","Creates an empty linked hash map with the given initial capacity and hash builder.",1,{"inputs":[{"name":"usize"},{"name":"s"}],"output":{"name":"self"}}],[11,"reserve","","Reserves capacity for at least `additional` more elements to be inserted into the map. The map may reserve more space to avoid frequent allocations.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"shrink_to_fit","","Shrinks the capacity of the map as much as possible. It will drop down as much as possible while maintaining the internal rules and possibly leaving some space in accordance with the resize policy.",1,{"inputs":[{"name":"self"}],"output":null}],[11,"entry","","Gets the given key's corresponding entry in the map for in-place manipulation.",1,{"inputs":[{"name":"self"},{"name":"k"}],"output":{"name":"entry"}}],[11,"entries","","Returns an iterator visiting all entries in insertion order. Iterator element type is `OccupiedEntry<K, V, S>`. Allows for removal as well as replacing the entry.",1,{"inputs":[{"name":"self"}],"output":{"name":"entries"}}],[11,"insert","","Inserts a key-value pair into the map. If the key already existed, the old value is returned.",1,{"inputs":[{"name":"self"},{"name":"k"},{"name":"v"}],"output":{"name":"option"}}],[11,"contains_key","","Checks if the map contains the given key.",1,{"inputs":[{"name":"self"},{"name":"q"}],"output":{"name":"bool"}}],[11,"get","","Returns the value corresponding to the key in the map.",1,{"inputs":[{"name":"self"},{"name":"q"}],"output":{"name":"option"}}],[11,"get_mut","","Returns the mutable reference corresponding to the key in the map.",1,{"inputs":[{"name":"self"},{"name":"q"}],"output":{"name":"option"}}],[11,"get_refresh","","Returns the value corresponding to the key in the map.",1,{"inputs":[{"name":"self"},{"name":"q"}],"output":{"name":"option"}}],[11,"remove","","Removes and returns the value corresponding to the key from the map.",1,{"inputs":[{"name":"self"},{"name":"q"}],"output":{"name":"option"}}],[11,"capacity","","Returns the maximum number of key-value pairs the map can hold without reallocating.",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"pop_front","","Removes the first entry.",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"front","","Gets the first entry.",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"pop_back","","Removes the last entry.",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"back","","Gets the last entry.",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"len","","Returns the number of key-value pairs in the map.",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns whether the map is currently empty.",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"hasher","","Returns a reference to the map's hasher.",1,{"inputs":[{"name":"self"}],"output":{"name":"s"}}],[11,"clear","","Clears the map of all key-value pairs.",1,{"inputs":[{"name":"self"}],"output":null}],[11,"iter","","Returns a double-ended iterator visiting all key-value pairs in order of insertion. Iterator element type is `(&'a K, &'a V)`",1,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"iter_mut","","Returns a double-ended iterator visiting all key-value pairs in order of insertion. Iterator element type is `(&'a K, &'a mut V)` # Examples ``` use linked_hash_map::LinkedHashMap;",1,{"inputs":[{"name":"self"}],"output":{"name":"itermut"}}],[11,"keys","","Returns a double-ended iterator visiting all key in order of insertion.",1,{"inputs":[{"name":"self"}],"output":{"name":"keys"}}],[11,"values","","Returns a double-ended iterator visiting all values in order of insertion.",1,{"inputs":[{"name":"self"}],"output":{"name":"values"}}],[11,"index","","",1,{"inputs":[{"name":"self"},{"name":"q"}],"output":{"name":"v"}}],[11,"index_mut","","",1,{"inputs":[{"name":"self"},{"name":"q"}],"output":{"name":"v"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"default","","",1,{"inputs":[],"output":{"name":"self"}}],[11,"extend","","",1,{"inputs":[{"name":"self"},{"name":"i"}],"output":null}],[11,"extend","","",1,{"inputs":[{"name":"self"},{"name":"i"}],"output":null}],[11,"from_iter","","",1,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"fmt","","Returns a string that lists the key-value pairs in insertion order.",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"option"}}],[11,"lt","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"le","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"ge","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"gt","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"cmp","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"ordering"}}],[11,"hash","","",1,{"inputs":[{"name":"self"},{"name":"h"}],"output":null}],[11,"drop","","",1,{"inputs":[{"name":"self"}],"output":null}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"next","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[11,"next","","",5,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",5,null],[11,"next","","",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"next","","",6,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",6,null],[11,"next_back","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"next_back","","",5,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"next_back","","",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"len","","",3,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"len","","",5,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"len","","",4,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"drop","","",4,{"inputs":[{"name":"self"}],"output":null}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"next","","",7,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",7,null],[11,"next_back","","",7,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"len","","",7,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"next","","",8,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",8,null],[11,"next_back","","",8,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"len","","",8,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"into_iter","","",1,{"inputs":[{"name":"self"}],"output":{"name":"intoiter"}}],[11,"key","","Returns the entry key",0,{"inputs":[{"name":"self"}],"output":{"name":"k"}}],[11,"or_insert","","Ensures a value is in the entry by inserting the default if empty, and returns a mutable reference to the value in the entry.",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"v"}}],[11,"or_insert_with","","Ensures a value is in the entry by inserting the result of the default function if empty, and returns a mutable reference to the value in the entry.",0,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"v"}}],[11,"key","","Gets a reference to the entry key",9,{"inputs":[{"name":"self"}],"output":{"name":"k"}}],[11,"get","","Gets a reference to the value in the entry.",9,{"inputs":[{"name":"self"}],"output":{"name":"v"}}],[11,"get_mut","","Gets a mutable reference to the value in the entry.",9,{"inputs":[{"name":"self"}],"output":{"name":"v"}}],[11,"into_mut","","Converts the OccupiedEntry into a mutable reference to the value in the entry with a lifetime bound to the map itself",9,{"inputs":[{"name":"self"}],"output":{"name":"v"}}],[11,"insert","","Sets the value of the entry, and returns the entry's old value",9,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"v"}}],[11,"remove","","Takes the value out of the entry, and returns it",9,{"inputs":[{"name":"self"}],"output":{"name":"v"}}],[11,"key","","Gets a reference to the entry key",10,{"inputs":[{"name":"self"}],"output":{"name":"k"}}],[11,"insert","","Sets the value of the entry with the VacantEntry's key, and returns a mutable reference to it",10,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"v"}}]],"paths":[[4,"Entry"],[3,"LinkedHashMap"],[3,"LinkedHashMapVisitor"],[3,"Iter"],[3,"IntoIter"],[3,"IterMut"],[3,"Entries"],[3,"Keys"],[3,"Values"],[3,"OccupiedEntry"],[3,"VacantEntry"]]};
initSearch(searchIndex);