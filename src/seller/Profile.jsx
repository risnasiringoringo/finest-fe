
import { useEffect } from "react";
import AOS from "aos";
export const Profile = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    
    <section className="section profile container" >
      <div className="container section-title" data-aos="fade-up">
          <h2>Profile</h2>
          
        </div>
  <div className="row" style={{padding:"15px"}}>
    <div className="col-xl-4">
      <div className="card">
        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
          <img
            src="/assets/img//team/team-1.jpg"
            className="rounded-circle"
            alt="Profile"
            style={{ width: 150, height: 150 }}
          />
          <h2>
            Tono
          </h2>
          <h3>
            Assa Group
          </h3>
          <div className="social-links mt-2">
            <a href="#" className="twitter">
              <i className="bi bi-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-8">
      <div className="card">
        <div className="card-body pt-3">
          {/* Bordered Tabs */}
          <ul className="nav nav-tabs nav-tabs-bordered">
            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#profile-overview"
              >
                Ringkasan
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#profile-edit"
              >
                Edit Data Pribadi
              </button>
            </li>
            
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#profile-edit-store"
              >
                Edit Data Perusahaan/Lembaga
              </button>
            </li>
            
          </ul>
          <div className="tab-content pt-2">
            <div
              className="tab-pane fade show active profile-overview"
              id="profile-overview"
            >
              
              <h5 className="card-title">Detail Profil</h5>
              <div className="row">
                <div className="col-lg-3 col-md-4 label ">Nama Lengkap</div>
                <div className="col-lg-9 col-md-8">
                  Tono Lengkap
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-4 label">Username</div>
                <div className="col-lg-9 col-md-8">
                  tono_company
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-4 label">
                  Nomor Telepon
                </div>
                <div className="col-lg-9 col-md-8">
                  +62800000000
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-4 label">Tanggal Lahir</div>
                <div className="col-lg-9 col-md-8">
                  01/01/1999
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-4 label">Email</div>
                <div className="col-lg-9 col-md-8">
                  info@example.com
                </div>
              </div>
            </div>
            <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
              {/* Profile Edit Form */}
              <form
                action="#"
                method="POST"
                className="mx-3 my-3"
              >
                
                <div className="mb-3">
                  <label htmlFor="nama_lengkap">Nama Lengkap</label>
                  <input
                    type="text"
                    name="nama_lengkap"
                    id="nama_lengkap"
                    className="form-control"
                    defaultValue="Tono Lengkap"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tanggal_lahir">Tanggal Lahir</label>
                  <input
                    type="date"
                    name="tanggal_lahir"
                    id="tanggal_lahir"
                    className="form-control"
                    defaultValue="01/01/1999"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="notelp">Nomor Telepon</label>
                  <input
                    type="number"
                    name="notelp"
                    id="notelp"
                    className="form-control"
                    defaultValue="62800000000"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Alamat Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    defaultValue="info@example.com"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">
                    Password (Kosongkan jika tidak ingin mengubah)
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password_confirmation">
                    Konfirmasi Password
                  </label>
                  <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Simpan Perubahan
                </button>
              </form>
              {/* End Profile Edit Form */}
            </div>
            
          </div>
          <div className="tab-pane fade pt-3" id="profile-edit-store">
            {/* Store Edit Form */}
            
            <form
              action="{{ route('login.updatestore', $user->id) }}"
              method="POST"
              className="mx-3 my-3"
            >
              <div className="mb-3">
                <label htmlFor="nama_toko">Nama Perusahaan/Lembaga</label>
                <input
                  type="text"
                  name="nama_toko"
                  id="nama_toko"
                  className="form-control"
                  defaultValue="PT. Assa Ikan Ikan"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nobadan_usaha">Nomor Badan Usaha</label>
                <input
                  type="number"
                  name="nobadan_usaha"
                  id="nobadan_usaha"
                  className="form-control"
                  defaultValue="789707089890899"
                  required=""
                />
              </div>
              <div className="mb-3">
                  <label htmlFor="notelp_usaha">Nomor Telepon Perusahaan/Lembaga</label>
                  <input
                    type="number"
                    name="notelp_usaha"
                    id="notelp_usaha"
                    className="form-control"
                    defaultValue="62800000000"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email_usaha">Alamat Email</label>
                  <input
                    type="email"
                    name="email_usaha"
                    id="email_usaha"
                    className="form-control"
                    defaultValue="info@example.com"
                    required=""
                  />
                </div>
              <div className="mb-3">
                <label htmlFor="alamat_lengkap">Alamat Lengkap Perusahaan/Lembaga</label>
                <input
                  type="text"
                  name="alamat_lengkap"
                  id="alamat_lengkap"
                  className="form-control"
                  defaultValue="Jl. Kesana Kemari"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Simpan Perubahan
              </button>
            </form>
            
          </div>
        </div>
        {/* End Bordered Tabs */}
      </div>
    </div>
  </div>
</section>

  )
}
