import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import axios from 'axios'

const API_URL = 'http://demo-api.stecom.vn:8888/api/student/delete'
const Detail = ({ navigation, route }) => {
    const { student } = route.params

    const removeStudent = async () => {
        try {
            await axios.delete(`${API_URL}/${student.id}`)
            Alert.alert('Thành công', 'Xóa ứng viên thành công')
            navigation.navigate('Home')
        } catch (err) {
            console.error('Lỗi xóa sinh viên:', err)
            Alert.alert('Lỗi', 'Không thể xóa sinh viên')
        }
    }

    const confirmRemove = () => {
        Alert.alert(
            'Xóa sinh viên',
            'Bạn có muốn xóa sinh viên này?',
            [
                {
                    text: 'Hủy bỏ',
                    style: 'hủy bỏ'
                },
                {
                    text: 'OK',
                    onPress: removeStudent
                }
            ],
            { cancelable: false }
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name='arrow-left' size={20} color='black'></Feather>
                </TouchableOpacity>
                <Text style={styles.textHeader}>Thông tin chi tiết ứng viên</Text>
            </View>
            <View style={styles.body}>
                <Text style={{ fontWeight: 'bold' }}>Tên ứng viên</Text>
                <Text>{student.name}</Text>
                <View style={styles.line}></View>
                <Text style={{ fontWeight: 'bold' }}>Mã số ứng viên</Text>
                <Text>{student.studentCode}</Text>
                <View style={styles.line}></View>
                <Text style={{ fontWeight: 'bold' }}>Email</Text>
                <Text>exalple@gmail.com</Text>
                <View style={styles.line}></View>
                <Text style={{ fontWeight: 'bold' }}>Ngày sinh</Text>
                <Text>{student.dateOfBirth}</Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.footer}>
                <Button title='Xóa ứng viên' onPress={confirmRemove}></Button>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 25
    },
    body: {
        paddingHorizontal: 10,
        paddingTop: 20
    },
    line: {
        width: '100%', height: 2, backgroundColor: 'gray', marginVertical: 5
    },
    footer: {
        paddingHorizontal: 10
    }
})