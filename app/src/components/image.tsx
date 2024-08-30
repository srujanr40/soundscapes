// app/components/image
import Image from 'next/image'

const getImage = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/images')
    if (!response.ok) {
      throw new Error('Failed to fetch image')
    }
    const data = await response.text()
    return data
  } catch (error) {
    console.error('Error fetching image:', error)
  }
}

export default async function CardBackgroundImage() {
  const imageUrl = await getImage()

  return (
    <div>
      {imageUrl ? (
        <Image src={imageUrl} alt="s3url" width="1200" height="1200" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  )
}
