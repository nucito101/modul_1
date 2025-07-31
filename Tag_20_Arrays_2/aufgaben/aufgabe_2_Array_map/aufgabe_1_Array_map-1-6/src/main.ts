const album: string[] = ["holidays.jpg", "Restaurant.jpg", "desktop", "rooms.GIF", "DOGATBEACH.jpg"]

function cleanFileName(file: string): string {
  const dotIndex = file.lastIndexOf(".")

  if (dotIndex === -1) {
    return "invalid"
  } else {
    const name = file.slice(0, dotIndex)
    return name.toLowerCase()
  }
}

const cleanedAlbum: string[] = album.map(cleanFileName)

console.log("Bereinigte Dateinamen:", cleanedAlbum)
