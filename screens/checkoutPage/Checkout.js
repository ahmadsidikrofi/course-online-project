import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const Checkout = ({route}) => {
    const {namaCourse, harga} = route.params
    const [jmlPaket, setJmlPaket] = useState('');
    const [voucher, setVoucher] = useState('');
    const [totalBayar, setTotalBayar] = useState(0)

    const handlePayCourse = () => {
        if (voucher === "PROFISUPERMURAH") {
            const diskon = 0.35
            const nominalVoucher = harga * jmlPaket * diskon
            const hargaTotal = harga * jmlPaket - nominalVoucher
            setTotalBayar(hargaTotal)
        } else {
            const hargaTotal = harga * jmlPaket
            setTotalBayar(hargaTotal)
        }
    }
    return (
        <View style={styles.parentContainer}>
            <View style={styles.container}>
                <Text style={styles.promoInfo}><Text style={{ fontSize: 15, fontWeight: '400' }}>GUNAKAN PROMO</Text>   PROFISUPERMURAH</Text>
                <View>
                    <Text style={styles.titleCourse}>{namaCourse}</Text>
                </View>

                <View style={{ marginVertical: 30 }}>
                    <Text style={styles.titlePrice}>Price</Text>
                    <Text style={styles.price}>Rp. {harga} / paket</Text>
                </View>

                <View style={{ marginLeft: 15 }}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.label}>Jumlah Paket</Text>
                        <LinearGradient style={styles.input} colors={['#A0DAFB', '#0A8ED9']}>
                            <TextInput style={styles.inputText} onChangeText={(val) => (setJmlPaket(val))}/>
                        </LinearGradient>
                    </View>
                    <View>
                        <Text style={styles.label}>Voucher Kode</Text>
                        <LinearGradient style={styles.input} colors={['#A0DAFB', '#0A8ED9']}>
                            <TextInput style={styles.inputText} onChangeText={(val) => setVoucher(val)}/>
                        </LinearGradient>
                    </View>
                </View>

                <View style={styles.totalSection}>
                    <Text style={styles.jumlahPaket}>Jumlah Paket : {jmlPaket}</Text>
                    <Text style={styles.jumlahPaket}>Voucher Code : {voucher}</Text>
                    <Text style={styles.totalPembayaran}>Total Pembayaran</Text>
                    <Text style={styles.totPrice}>Rp {totalBayar}</Text>
                </View>
                <View style={{ marginTop: 50, flexDirection: 'row', justifyContent: 'center', gap: 10,}}>
                    <TouchableOpacity onPress={handlePayCourse} >
                        <LinearGradient style={styles.btn} colors={['#A0DAFB', '#0A8ED9']}>
                            <Text style={styles.btnText}>Hitung</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <LinearGradient style={styles.btn} colors={['#A0DAFB', '#0A8ED9']}>
                            <Text style={styles.btnText}>Checkout</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
 
export default Checkout;