/**
 * @param {number[][]} grid
 * @return {number}
 */

var input = [
     [0,0,1,0,0,0,0,1,0,0,0,0,0],
     [0,0,0,0,0,0,0,1,1,1,0,0,0],
     [0,1,1,0,1,0,0,0,0,0,0,0,0],
     [0,1,0,0,1,1,0,0,1,0,1,0,0],
     [0,1,0,0,1,1,0,0,1,1,1,0,0],
     [0,0,0,0,0,0,0,0,0,0,1,0,0],
     [0,0,0,0,0,0,0,1,1,1,0,0,0],
     [0,0,0,0,0,0,0,1,1,0,0,0,0]
];

var expected = 6;

    
var maxAreaOfIsland = function(grid) {
    // constraint: n/a
    var maxArea = 0;
    // maxArea = 0;
    // islandCount = 0;
    
    // HELPERS 
    // findIslandsAround(row, col)
    const findIslandsAround = (row, col) => {
        
    };
        // returns [row, col] of valid island pieces around input row, col
    
    // findIslandArea(row, col, area = 0)
    const findIslandArea = (row, col, area = 0) => {
        // takes beginning coord of an island and excavates it
        
        // if (grid[row][col] has island) increment area
        // destroy island
        // base: coords all directionally around row, col are empty
            // return area
        // recurse: for each island found around row, col, findIslandArea(on them)
            // area += findIslandArea(them)
            // return area;
    };
        
        
    // for each row in grid
        // for each col in row
            // if element is 1, update islandCount = 1, set coord to 0
                // find island area of island, and add to islandCount
        // update maxArea if < islandCount
        // islandCount = 0;
};

/*
// Strategy: 
    // iterate thru each coordinate, and if run into island
        // update count of area, sink the island, recursively check around island piece and for any islands around a coordinate
            // recursively check those pieces, sinking islands, adding them onto count
                // base: no more islands around a piece
                    // return total
                // recurse: if there are islands around a piece
                    // return value of recurse onto those coordinates (expect numer)
        // update maxArea if area of island > maxArea
    // return maxArea
            
// Big-O: 
    // Time: quadratic (in the worst case where island is the whole 2D array, algo will go over each row below the top row)
    // Space: Constant

// Transformation
    // Input: [...input]
    // maxArea = 0;
    // islandCount = 0;
    // row 0, col 0
    // row 0, col 2
        // found an island
            // islandArea = 1;
            // island coord set to 0 
        // no area around island
        // update maxArea
    // row 0, col 7
        // found an island
            // islandArea = 1, destroy island
        // for each area around island,
            // sink island and look for island pieces around it
        // found 1 island below
            // islandArea = 2 (row 1, col 7) destroy island
            // look for area around island
                // found 1 to right
                    // islandArea = 3 (row 1, col 8), destroy island
                    // look for area around island
                        // found 1 to right
                            // islandArea = 4 (row 1, col9), destroy island
                            // look for area around island
                                // no other islands found
                                // return islandArea (4)
        // update maxArea (4)
        
    // row 3, col 8
        // found an island
    
var maxAreaOfIsland = function(grid) {
    // constraint: n/a
    
    // maxArea = 0;
    // islandCount = 0;
    
    // HELPERS 
    // findIslandsAround(row, col)
        // returns [row, col] of valid island pieces around input row, col
    
    // findIslandArea(row, col, area = 0)
        // takes beginning coord of an island and excavates it
        
        // if (grid[row][col] has island) increment area
        // destroy island
        // base: coords all directionally around row, col are empty
            // return area
        // recurse: for each island found around row, col, findIslandArea(on them)
            // area += findIslandArea(them)
            // return area;
        
    // for each row in grid
        // for each col in row
            // if element is 1, update islandCount = 1, set coord to 0
                // find island area of island, and add to islandCount
        // update maxArea if < islandCount
};
*/