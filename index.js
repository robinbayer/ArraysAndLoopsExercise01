

let mainArray = [5, 6, 2, 9, 12, 16, 235, 22, 12, 55, 3];
let secondaryIndexer;

for (indexer = 0; indexer < mainArray[6]; indexer++) {

    secondaryIndexer = indexer % 10;

    if (secondaryIndexer != 6) {
        if (secondaryIndexer == 9) {

            mainArray[secondaryIndexer] = Math.abs(mainArray[secondaryIndexer] + (mainArray[0] / mainArray[10]));

        } else {

            mainArray[secondaryIndexer] = mainArray[secondaryIndexer] + Math.abs(mainArray[secondaryIndexer + 1] / mainArray[2]);

        }
    }

}       // for (i = 0; i < mainArray[6]; i++) {

for (indexer = 0; indexer < 10; indexer++) {

    console.log(`mainArray[${indexer}] => ${mainArray[indexer]}`);

}       // for (indexer = 0; indexer < 10; indexer++) {