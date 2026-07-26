import { WindowControls } from "#components";
import { gallery } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Photos = () => {
    const { openWindow } = useWindowStore();

    const handlePhotoClick = (photo) => {
        openWindow("imgfile", {
            name: `Gallery Image ${photo.id}`,
            imageUrl: photo.img
        });
    };

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <h2 className="font-bold">Gallery</h2>
            </div>

            <div className="p-4 bg-mauve-300">
                <div className="grid grid-cols-4 gap-4">
                    {gallery.map((photo) => (
                        <div
                            key={photo.id}
                            onClick={() => handlePhotoClick(photo)}
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            <img
                                src={photo.img}
                                alt={`Gallery ${photo.id}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
