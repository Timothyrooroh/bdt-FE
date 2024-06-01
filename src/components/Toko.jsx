import React, { useEffect, useState } from "react";
import ModalAddTrans from "./modal/ModalAddTrans";
import ModalEdiSKPD from "./modal/ModalEditSKPD";
import axios from "axios";
import ModalDeleteSKPD from "./modal/ModalDeleteSKPD";

const Toko = () => {
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [trans, setTransaksi] = useState([])


  const getTransaksi = async()=> {
    try {
      const response = await axios.get("http://localhost:5000/transaksi")
      setTransaksi(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getTransaksi()
  }, [])

  const hapusTransaksi = async(idTrans) => {
      await axios.delete(`http://localhost:5000/transaksi/${idTrans}`)
      getTransaksi()
  }


  return (
    <div>

      {isOpenModalAdd && (
        <ModalAddTrans
          setIsOpenModalAdd={setIsOpenModalAdd}
        />
      )}
      {isOpenModalEdit && (
        <ModalEdiSKPD
          setIsOpenModalAdd={setIsOpenModalEdit}
        />
      )}
      {isOpenModalDelete && (
        <ModalDeleteSKPD
          setIsOpenModalDelete={setIsOpenModalDelete}
        />
      )}
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpenModalAdd(true)}
          className="btn btn-primary"
        >
          Tambah Transaksi
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Jumlah</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {trans.map((item, index) => (
              <tr key={item && item.id_stok}>
                <th>{index + 1}</th>
                <td>{item && item.nama_barang}</td>
                <td>{item && item.jumlah}</td>
                <td className="flex items-center justify-center text-center space-x-4">
                  <button
                    className="btn btn-error"
                    onClick={()=> hapusTransaksi(item && item.id_transaksi)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Toko