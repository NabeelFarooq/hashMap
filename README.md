# HashMap Implementation

A complete **hash table/hash map** implementation in JavaScript demonstrating hash function design, collision resolution, and dynamic resizing. This project showcases understanding of hash data structures, load factor management, and performance optimization techniques critical to backend systems.

## 🎯 Project Overview

This repository implements a production-style HashMap class with automatic dynamic resizing, hash collision handling, and efficient key-value pair management. The implementation includes hashing algorithms, load factor calculation, and array resizing strategies used in real-world systems like Java's HashMap and JavaScript's Object internals.

## 📚 Core Components

### HashMap Class Structure

```javascript
class HashMap {
  constructor() {
    this.arrSize = 50;        // Initial bucket count
    this.arr = [...];          // Hash table array
    this.loadFactor = 0.75;    // Resize trigger
    this.occupied = load();    // Track filled slots
  }
}
```

## 🔧 Complete API

### Hashing & Storage

#### `hash(string)`
Converts a string key into a hash code and maps it to an array index.
- **Algorithm**: Polynomial rolling hash with prime number (31)
- **Time Complexity**: O(k) where k = key length
- **Properties**:
  - Deterministic: Same key always produces same hash
  - Distributed: Different keys spread across buckets
  - Modulo operation: Keeps result within array bounds

```javascript
hashMap.hash('name');     // Returns: hash code between 0-49
hashMap.hash('age');       // Returns: different hash code
```

**Hash Function Logic**:
```javascript
hashCode = 0
for each character in string:
  hashCode = (31 * hashCode + charCode) % arrayLength
return hashCode
```

This polynomial rolling hash distributes keys uniformly across the hash table, minimizing collisions.

#### `set(key, value)`
Stores or updates a key-value pair in the hash map.
- **Time Complexity**: O(k) for hashing + O(1) insertion = O(k)
- **Behavior**: Overwrites existing value if key exists
- **Side Effect**: Triggers load factor check and resizing if needed

```javascript
hashMap.set('name', 'Alice');    // Stores key-value pair
hashMap.set('age', 25);           // Triggers load factor check
hashMap.set('city', 'New York');  // May trigger resize if load factor exceeded
```

**Output Example**:
```
Hashcode: 8
arr[8]: Alice
```

#### `get(key)`
Retrieves the value associated with a key.
- **Time Complexity**: O(k) for hashing + O(1) lookup = O(k)
- **Returns**: Value if found, null if key doesn't exist
- **Behavior**: Direct array access using hashed index

```javascript
hashMap.get('name');    // Returns: 'Alice'
hashMap.get('job');     // Returns: null (if not set)
```

#### `has(key)`
Checks if a key exists in the hash map (without returning value).
- **Time Complexity**: O(k)
- **Returns**: Boolean

```javascript
hashMap.has('name');    // Returns: true
hashMap.has('invalid'); // Returns: false
```

#### `remove(key)`
Deletes a key-value pair from the hash map.
- **Time Complexity**: O(n) due to array splice operation
- **Returns**: Boolean indicating success
- **Side Effect**: May trigger load factor check

```javascript
hashMap.remove(5);      // Removes value at index 5
hashMap.remove(99);     // Returns false if index out of bounds
```

### Size & Capacity Management

#### `load()`
Manages load factor and triggers array resizing when threshold exceeded.
- **Load Factor**: occupied_slots / total_slots
- **Threshold**: 0.75 (75% capacity)
- **Trigger**: When load factor ≥ 0.75
- **Resize Strategy**: Double array size
- **Time Complexity**: O(n) for copying and rehashing

```javascript
// Automatic behavior - called after set()
// If load factor > 0.75, array size doubles:
// arrSize: 50 → 100 → 200 → 400 → ...
```

**Why Load Factor = 0.75?**
- **< 0.75**: More memory waste, fewer collisions
- **= 0.75**: Good balance between memory and collision risk
- **> 0.75**: More collisions, degraded performance

#### `length()`
Counts the number of non-null entries in the hash map.
- **Time Complexity**: O(n) - must scan entire array
- **Returns**: Integer count
- **Use Case**: Monitor how many key-value pairs are stored

```javascript
hashMap.length();    // Returns: 75 (if 75 entries stored)
```

#### `check(value)`
Validates that an array index is within bounds.
- **Throws**: Error if index out of bounds
- **Use Case**: Safety validation for direct array access

```javascript
hashMap.check(50);   // OK - valid index
hashMap.check(999);  // Throws error: "Trying to access index 999, which is out of bound"
```

### Data Retrieval Methods

#### `values()`
Returns array of all values stored in the hash map.
- **Time Complexity**: O(n)
- **Returns**: Array of non-null values
- **Order**: Insertion order is NOT guaranteed

```javascript
hashMap.values();    // Returns: ['Alice', 25, 'New York', ...]
```

#### `entries()`
Returns array of [key, value] pairs.
- **Time Complexity**: O(n)
- **Returns**: Array of [index, value] pairs
- **Note**: Keys are array indices, not original string keys

```javascript
hashMap.entries();   // Returns: [[8, 'Alice'], [15, 25], [20, 'New York'], ...]
```

#### `clear()`
Removes all entries from the hash map.
- **Time Complexity**: O(n)
- **Effect**: Resets array to all nulls
- **Side Effect**: Does NOT reset array size

```javascript
hashMap.clear();     // Empties entire hash map
console.log(hashMap.length()); // Returns: 0
```

## 📊 Example Usage

Complete workflow with load factor management:

```javascript
const hashMap = new HashMap();

// 1. Add entries (automatic resizing)
hashMap.set('name', 'Alice');      // arrSize: 50
hashMap.set('age', 25);
hashMap.set('city', 'NYC');
// ... After 37+ entries, load factor > 0.75
// ... Array automatically resizes to 100

// 2. Query entries
console.log(hashMap.get('name'));   // 'Alice'
console.log(hashMap.has('age'));    // true
console.log(hashMap.length());       // 75

// 3. Retrieve all data
console.log(hashMap.values());       // [values...]
console.log(hashMap.entries());      // [[index, value]...]

// 4. Remove entries
hashMap.remove(8);                  // Removes entry at index 8
console.log(hashMap.length());       // 74

// 5. Clear everything
hashMap.clear();
console.log(hashMap.length());       // 0
```

## 🎓 Concepts Demonstrated

### Hash Table Fundamentals
- ✅ **Hash Function**: Polynomial rolling hash using prime numbers
- ✅ **Hash Code**: Converting strings to numeric indices
- ✅ **Array Indexing**: Direct O(1) array access after hashing
- ✅ **Load Factor**: Managing capacity and performance

### Memory Management
- ✅ **Dynamic Resizing**: Doubling strategy when load factor exceeded
- ✅ **Array Concatenation**: Expanding capacity with null padding
- ✅ **Rehashing**: Implicit rehashing through modulo operation

### Performance Optimization
- ✅ **O(k) Key Operations**: Hash function is proportional to key length
- ✅ **O(1) Lookup**: After hashing, direct array access
- ✅ **Load Factor Tuning**: Balance between memory and collision risk
- ✅ **Amortized O(1)**: Average case for set/get/has operations

### Practical Patterns
- ✅ **Collision Handling**: Chaining through array index assignment
- ✅ **Capacity Planning**: Automatic scaling prevents overflow
- ✅ **Memory Efficiency**: Only stores occupied slots

## 💡 Real-World Applications

Hash maps are fundamental to:
- **Database Indexing**: Fast record lookups
- **Caching**: Browser caches, CDNs
- **Symbol Tables**: Compiler variable storage
- **URL Routing**: Web framework URL-to-handler mapping
- **Session Management**: User session ID lookup
- **Deduplication**: Finding duplicate entries
- **Counting Frequencies**: Word frequency analysis
- **Memoization**: Caching function results

## 📈 Performance Characteristics

| Operation | Time Complexity | Space Complexity | Notes |
|-----------|-----------------|------------------|-------|
| set | O(k) amortized | O(n) | k = key length |
| get | O(k) | O(1) | Direct array access |
| has | O(k) | O(1) | No value storage |
| remove | O(n) | O(1) | Array splice cost |
| load | O(n) | O(n) | Resize and copy |
| length | O(n) | O(1) | Must count all slots |
| values | O(n) | O(m) | m = stored entries |
| clear | O(n) | O(1) | Reset all slots |

## 📈 Hash Function Quality

The polynomial rolling hash provides:
- **Uniform Distribution**: Keys spread across all buckets
- **Avalanche Effect**: Small key change = big hash change
- **Prime Multiplier**: 31 is prime, reduces clustering
- **Modulo Reduction**: Keeps indices in valid range

**Example**:
```
hash('abc') ≠ hash('abd')  // Different hashes
hash('a') ≠ hash('aa')     // Different hashes
hash('abc') = hash('abc')  // Same inputs, same output
```

## 🎯 This project demonstrates:
1. **Data Structure Mastery** - Understanding of hash tables
2. **Algorithm Design** - Hash function and collision handling
3. **Memory Management** - Dynamic resizing and capacity planning
4. **Performance Tuning** - Load factor optimization
5. **Real-World Patterns** - Industry-standard practices
6. **Backend Knowledge** - Hash maps used in all backends

## 🔍 Code Quality

- **Methods**: 10 core operations
- **Lines of Code**: ~140 lines
- **Class-based**: Object-oriented design
- **Test Script**: 70+ data entries for stress testing
- **Documentation**: Inline comments for key logic

## 📝 License

ISC License

---

**Repository**: [github.com/NabeelFarooq/hashMap](https://github.com/NabeelFarooq/hashMap)  
**Created**: Data structures portfolio project  
**Purpose**: Interview preparation and backend knowledge demonstration
