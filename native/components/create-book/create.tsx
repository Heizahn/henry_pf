import { TextInput, Text, View, Image, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import ButtonPrimary from '../button-primary';
import { styles } from './styles';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { insertBook } from '../../lib/supabase/supabase';
import { router } from 'expo-router';

export const createBookSchema = yup.object({
	title: yup.string().required('*'),
	author: yup.string().required('*'),
	description: yup.string().required('*'),
	category: yup.string().required('*'),
	photoUrl: yup.string().required('*'),
});

const InitialValues = {
	title: '',
	author: '',
	description: '',
	category: '',
	photoUrl: '',
};

export default function CreateBook() {
	const [image, setImage] = useState<string | null>(null);
	const [loading, setLoading] = useState<Boolean>(false);

	// const uploadImage = async () => {
	// 	const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dsvghulau/image/upload';

	// 	let formData = new FormData();
	// 	formData.append('file', `${image}`);
	// 	formData.append('upload_preset', 'portdas');

	// 	try {
	// 		const r = await fetch(CLOUDINARY_URL, {
	// 			method: 'POST',
	// 			body: formData,
	// 		});
	// 		const data = await r.json();
	// 		return data.secure_url;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: false,
			aspect: [9, 16],
			quality: 1,
			base64: true,
		});

		if (!result.canceled) {
			setImage(`data:image/jpg;base64,${result.assets[0].base64}`);
			return `data:image/jpg;base64,${result.assets[0].base64}`;
		}
	};

	const handleSubmit = async (values: any) => {
		try {
			setLoading(true);

			const res = await insertBook(values);

			if (res.error) {
				Alert.alert('Error al crear libro', res.error.message);
			}

			Alert.alert('Libro creado correctamente');
			router.push('/library');
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
			setImage(null);
		}
	};
	return (
		<Formik
			initialValues={InitialValues}
			validationSchema={createBookSchema}
			onSubmit={(values, { resetForm }) => {
				handleSubmit(values).finally(() => {
					resetForm();
				});
			}}
		>
			{({ handleChange, handleBlur, handleSubmit, values, errors }) =>
				loading ? (
					<View style={styles.container}>
						<Text style={styles.titleInput}>Creando libro...</Text>
					</View>
				) : (
					<View style={styles.container}>
						<View style={styles.inputDiv}>
							<Text style={styles.titleInput}>
								Titulo{' '}
								{errors.title && (
									<Text style={styleImg.error}>{errors.title}</Text>
								)}
							</Text>
							<TextInput
								style={styles.inputStyle}
								onChangeText={handleChange('title')}
								onBlur={handleBlur('title')}
								value={values.title}
							/>
						</View>

						<View style={styles.inputDiv}>
							<Text style={styles.titleInput}>
								Autor{' '}
								{errors.author && (
									<Text style={styleImg.error}>{errors.author}</Text>
								)}
							</Text>
							<TextInput
								style={styles.inputStyle}
								onChangeText={handleChange('author')}
								onBlur={handleBlur('author')}
								value={values.author}
							/>
						</View>

						<View style={styles.inputDiv}>
							<Text style={styles.titleInput}>
								Descripción{' '}
								{errors.description && (
									<Text style={styleImg.error}>{errors.description}</Text>
								)}
							</Text>
							<TextInput
								style={styles.inputStyle}
								onChangeText={handleChange('description')}
								onBlur={handleBlur('description')}
								value={values.description}
							/>
						</View>

						<View style={styles.inputDiv}>
							<Text style={styles.titleInput}>
								Categoría{' '}
								{errors.category && (
									<Text style={styleImg.error}>{errors.category}</Text>
								)}
							</Text>
							<TextInput
								style={styles.inputStyle}
								onChangeText={handleChange('category')}
								onBlur={handleBlur('category')}
								value={values.category}
							/>
						</View>

						<View style={styles.inputDiv}>
							<Text style={styles.titleInput}>
								Portada{' '}
								{errors.photoUrl && (
									<Text style={styleImg.error}>{errors.photoUrl}</Text>
								)}
							</Text>
							<Image
								source={
									image ? { uri: image } : require('../../assets/icon.png')
								}
								style={styleImg.img}
							/>
							<ButtonPrimary
								handlerPress={async () => {
									handleChange('photoUrl')(`${await pickImage()}`);
								}}
								title={(image ? 'Cambiar' : 'Seleccionar') + ' Portada'}
							/>
						</View>
						<ButtonPrimary handlerPress={handleSubmit} title='Crear Libro' />
					</View>
				)
			}
		</Formik>
	);
}

const styleImg = StyleSheet.create({
	img: {
		width: 150,
		height: 200,
		borderRadius: 10,
		marginHorizontal: 'auto',
	},
	error: {
		color: 'red',
		fontSize: 12,
	},
});
