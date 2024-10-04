// components/icons/EditIcon.tsx
export default function EditIcon({ className, onClick }: { className?: string; onClick?: () => void }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 33"
        fill="none"
        className={className}
        onClick={onClick}
        width="24" // Puedes ajustar el tamaño aquí o desde las props
        height="24"
      >
        <mask id="mask0_589_317" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33">
          <rect x="0.273926" y="0.279053" width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_589_317)">
          <path
            d="M6.94059 25.6124H8.84059L21.8739 12.5791L19.9739 10.6791L6.94059 23.7124V25.6124ZM4.27393 28.2791V22.6124L21.8739 5.04572C22.1406 4.80127 22.435 4.61239 22.7573 4.47905C23.0795 4.34572 23.4184 4.27905 23.7739 4.27905C24.1295 4.27905 24.4739 4.34572 24.8073 4.47905C25.1406 4.61239 25.4295 4.81239 25.6739 5.07905L27.5073 6.94572C27.7739 7.19016 27.9684 7.47905 28.0906 7.81239C28.2128 8.14572 28.2739 8.47905 28.2739 8.81239C28.2739 9.16794 28.2128 9.50683 28.0906 9.82905C27.9684 10.1513 27.7739 10.4457 27.5073 10.7124L9.94059 28.2791H4.27393ZM20.9073 11.6457L19.9739 10.6791L21.8739 12.5791L20.9073 11.6457Z"
            fill="black"
          />
        </g>
      </svg>
    );
  }
  