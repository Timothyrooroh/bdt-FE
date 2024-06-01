import React, { useEffect, useState } from "react";
import ModalAddSKPD from "../../../components/modal/ModalAddSKPD";
import ModalEdiSKPD from "../../../components/modal/ModalEditSKPD";
import axios from "axios";
import ModalDeleteSKPD from "../../../components/modal/ModalDeleteSKPD";
import Layout from "../../Layout";

const Home = () => {
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [tokos, setToko] = useState([])


  const getToko = async()=> {
    try {
      const response = await axios.get("http://localhost:5000/toko")
      setToko(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getToko()
  }, [])

  const hapusToko = async(idStok) => {
      await axios.delete(`http://localhost:5000/toko/${idStok}`)
      getToko()
  }


  return (
    <Layout>

      {isOpenModalAdd && (
        <ModalAddSKPD
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
          Tambah Stok
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
            {tokos.map((item, index) => (
              <tr key={item && item.id_stok}>
                <th>{index + 1}</th>
                <td>{item && item.nama_barang}</td>
                <td>{item && item.jumlah}</td>
                <td className="flex items-center justify-center text-center space-x-4">
                  <button
                    className="btn btn-error"
                    onClick={()=> hapusToko(item && item.id_stok)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Home;
