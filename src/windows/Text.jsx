import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const {name, image, subtitle, description} = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-4 bg-mauve-200">
                {image && (
                    <img src={image} alt={name} className="w-full rounded-lg mb-4" />
                )}

                {subtitle && (
                    <h3 className="font-semibold text-center mb-4">{subtitle}</h3>
                )}

                {description && (
                    <div className="space-y-4 text-sm">
                        {description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
