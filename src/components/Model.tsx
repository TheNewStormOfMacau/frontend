export default function Model(props: {
  showModel: boolean;
  onClose: Function;
  children: React.ReactNode;
}) {
  return (
    props.showModel && (
      <div className="window-cover" onClick={(e) => props.onClose()}>
        <div
          className="window flex flex-col justify-center z-20 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {props.children}
        </div>
      </div>
    )
  );
}
