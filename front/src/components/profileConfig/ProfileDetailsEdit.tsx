import EditableField from './EditableField';
import { HOST_API } from '@/config/ENV';
import { useUserStore } from '@/store/useUserStore';

interface ProfileDetailsEditProps {
  name: string;
  description: string;
}

export default function ProfileDetailsEdit({
  name,
  description,
}: ProfileDetailsEditProps) {
  const userStore = useUserStore();
  const userId = userStore.user?.userId;
  const token = userStore.user?.token; // Aquí se obtiene el token desde el store
  console.log(userId, token);
  

  return (
    <div className="w-full max-w-md">
      <div className='text-h2 w-full'>
        {/* Editable field for name */}
        <EditableField
          value={name}
          clave="name"
          apiEndpoint={`${HOST_API}/users/${userId}`} // Aquí se pasa la URL específica
          token={token} // Se pasa el token obtenido del store
        />
      </div>

      <div className='text-p'>
        {/* Editable field for description */}
        <EditableField
          value={description}
          clave="Description"
          isTextArea={true}
          maxLength={200}
          apiEndpoint={`${HOST_API}/users/${userId}`} // La misma URL para descripción
          token={token} // Se pasa el token obtenido del store
        />
      </div>
    </div>
  );
}
