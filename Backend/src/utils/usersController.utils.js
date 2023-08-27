export function calculateListOfUsersWhichSawImageInPercentage (listOfUsersWhichSawImage, listOfUsers) {
    return (listOfUsersWhichSawImage / listOfUsers  * 100).toFixed(2);
}